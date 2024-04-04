import Card from "./Card"

const HomeCards = () => {
  return (
    <>
      <section className='py-4'>
        <div className='container-xl lg:container m-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
            <Card
              title={"For Developers"}
              subtitle={"Browse our React jobs and start your career today"}
              bg={"bg-gray-100"}
              style={
                "inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              }
              linkText={"Browse Job"}
              link={"/jobs"}
            />

            <Card
              title={"For Employers"}
              subtitle={
                "List your job to find the perfect developer for the role"
              }
              bg={"bg-indigo-100"}
              style={
                "inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
              }
              linkText={"Add Job"}
              link={"/add-job"}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeCards
