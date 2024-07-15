
export default {
	async fetch(request, env, ctx): Promise<Response> {
		return Response.json({
			message:"Hello, world !"
		});
	},
} satisfies ExportedHandler<Env>;
