import BedrockPageTree from "@components/bedrock/page-tree";
import Link from 'next/link'

export default function Layout(props) {
  return (
    <>
      <div className="flex flex-col min-h-screen">

        <main className="flex-1 lg:container px-4 py-6 mx-auto md:px-6 md:py-12">
          {props.children}
        </main>

      </div>

      <BedrockPageTree>
        <div className="pb-4">
          <ul className="space-y-1 br-pagetree-list">
            <li><Link href="/">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
            <li><Link href="/query-editor">Query editor</Link></li>
          </ul>
        </div>

        <div className="pb-4">
          <ul className="space-y-1 br-pagetree-list">
            <li><Link className="br-page-tree-link" href="/styleguide">Styleguide</Link></li>
          </ul>
        </div>

      </BedrockPageTree>
    </>
  );
}
