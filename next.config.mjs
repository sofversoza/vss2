/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/index.html",
				destination: "/",
				permanent: true,
			},
			{
				source: "/vascular-physicians.html",
				destination: "/physicians",
				permanent: true,
			},
			{
				source: "/contact.html",
				destination: "/contact",
				permanent: true,
			},
			{
				source: "/jeromy-brink.html",
				destination: "/physicians/jeromy-brink",
				permanent: true,
			},
			{
				source: "/hospitals-facilities.html",
				destination: "/resources/hospital-members",
				permanent: true,
			},
			{
				source: "/vein-center.html",
				destination: "/about/vein-center",
				permanent: true,
			},
			{
				source: "/vascular-faq.html",
				destination: "/resources/faq",
				permanent: true,
			},
			{
				source: "/new-patient.html",
				destination: "/resources",
				permanent: true,
			},
		]
	},
}

export default nextConfig
