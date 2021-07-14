import Button from "@components/button";
import Layout from '../components/layout'

export default function Page() {
  return (
    <>
      <div className="space-y-12">

        <p>Main template here.. page 2</p>

        <Button>I am a button example</Button>
      </div>

    </>
  );
}

Page.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)