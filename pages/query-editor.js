import Layout from '../components/layout'

export default function Page() {
  return (
    <>
      <div className="space-y-12">

        <p>Main template here.. page 3</p>

      </div>

    </>
  );
}

Page.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)