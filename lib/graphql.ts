import { PRICING_PLANS, PROJECTS, SERVICES } from "@/constants/site-data";
import type { PricingPlan, ProjectItem, ServiceItem } from "@/types";
import type { ServiceBookingValues, StudioBookingValues } from "@/schemas/booking.schema";
import type { ContactFormValues } from "@/schemas/contact.schema";

const GRAPHQL_URL =
  process.env.NEXT_PUBLIC_GRAPHQL_URL || "http://localhost:4000/graphql";

interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message: string }>;
}

export async function graphqlRequest<T>(
  query: string,
  variables?: Record<string, unknown>,
  options?: { revalidate?: number }
): Promise<T> {
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    ...(options?.revalidate !== undefined
      ? { next: { revalidate: options.revalidate } }
      : { cache: "no-store" as const }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL HTTP error: ${response.status}`);
  }

  const json = (await response.json()) as GraphQLResponse<T>;
  if (json.errors?.length) {
    throw new Error(json.errors[0].message);
  }
  if (!json.data) {
    throw new Error("Empty GraphQL response");
  }
  return json.data;
}

export async function submitServiceBooking(input: ServiceBookingValues) {
  return graphqlRequest<{ createServiceBooking: { id: string; status: string } }>(
    `
      mutation CreateServiceBooking($input: CreateServiceBookingInput!) {
        createServiceBooking(input: $input) {
          id
          status
        }
      }
    `,
    { input }
  );
}

export async function submitStudioBooking(input: StudioBookingValues) {
  return graphqlRequest<{ createStudioBooking: { id: string; status: string } }>(
    `
      mutation CreateStudioBooking($input: CreateStudioBookingInput!) {
        createStudioBooking(input: $input) {
          id
          status
        }
      }
    `,
    { input }
  );
}

export async function submitContactMessage(input: ContactFormValues) {
  return graphqlRequest<{ createContactMessage: { id: string; status: string } }>(
    `
      mutation CreateContactMessage($input: CreateContactMessageInput!) {
        createContactMessage(input: $input) {
          id
          status
        }
      }
    `,
    { input }
  );
}

export async function fetchServices(): Promise<ServiceItem[]> {
  try {
    const data = await graphqlRequest<{ services: ServiceItem[] }>(
      `
        query PublicServices {
          services {
            slug
            category
            image
            heroImage
            title { ar en }
            description { ar en }
            introSubtitle { ar en }
            introTitle { ar en }
            introBody1 { ar en }
            introBody2 { ar en }
          }
        }
      `,
      undefined,
      { revalidate: 60 }
    );
    return data.services.length ? data.services : SERVICES;
  } catch {
    return SERVICES;
  }
}

export async function fetchProjects(): Promise<ProjectItem[]> {
  try {
    const data = await graphqlRequest<{ projects: ProjectItem[] }>(
      `
        query PublicProjects {
          projects {
            slug
            category
            image
            heroImage
            gallery
            year
            title { ar en }
            categoryLabel { ar en }
            client { ar en }
            serviceName { ar en }
            date { ar en }
            type { ar en }
            headline { ar en }
            overview { ar en }
            goals { ar en }
            methodology { ar en }
          }
        }
      `,
      undefined,
      { revalidate: 60 }
    );
    return data.projects.length ? data.projects : PROJECTS;
  } catch {
    return PROJECTS;
  }
}

export async function fetchPackages(): Promise<PricingPlan[]> {
  try {
    const data = await graphqlRequest<{
      packages: Array<Omit<PricingPlan, "id"> & { code: string }>;
    }>(
      `
        query PublicPackages {
          packages {
            code
            highlighted
            name { ar en }
            price { ar en }
            description { ar en }
            features { ar en }
          }
        }
      `,
      undefined,
      { revalidate: 60 }
    );
    return data.packages.length
      ? data.packages.map(({ code, ...rest }) => ({ id: code, ...rest }))
      : PRICING_PLANS;
  } catch {
    return PRICING_PLANS;
  }
}
