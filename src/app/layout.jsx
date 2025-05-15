import "./globals.css";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
	// 메타데이터 설정 (Next.js 문서 참조)
};

const banner = <Banner storageKey="my-banner-key">안녕하세요 SunBeen's 블로그에 오신것을 환영합니다!</Banner>;
const navbar = <Navbar logo={<b>SunBeen's Blog</b>} /* 추가 옵션 */ />;
const footer = <Footer>MIT {new Date().getFullYear()} © Mario Inc</Footer>;

export default async function RootLayout({ children }) {
	return (
		<html lang="en" dir="ltr" suppressHydrationWarning>
			<Head>{/* 추가 <meta>나 <link> 태그 */}</Head>
			<body>
				<Layout
					banner={banner}
					navbar={navbar}
					sidebar={{ autoCollapse: true }}
					pageMap={await getPageMap()}
					docsRepositoryBase="https://github.com/choi-sunbin/SunBeen-Blog/tree/main/"
					footer={footer}
				>
					{children}
				</Layout>
			</body>
		</html>
	);
}
