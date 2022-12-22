import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({ locals, url }) => {
	url.href
	console.log("Ran Layout Auth Check")
	if (!locals.user) {
		console.log("Access Denied")
		throw redirect(303, "/")
	}

	return {
		user: locals.user,
	}
}
