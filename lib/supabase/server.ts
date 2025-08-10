// For pages/api or getServerSideProps
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs"
import { GetServerSidePropsContext } from "next"

export function createClient(ctx: GetServerSidePropsContext) {
  return createPagesServerClient(ctx)
}
