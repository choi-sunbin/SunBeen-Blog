import nextra from "nextra";

// Nextra 옵션을 여기에 설정
const withNextra = nextra({
	contentDirBasePath: "/docs"
});

export default withNextra({
	// 일반 Next.js 옵션들
	reactStrictMode: true,
	basePath: "/nextra-docs-template"
});
