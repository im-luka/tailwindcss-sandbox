function App() {
  return (
    <div className="flex h-screen bg-image">
      <header className="flex justify-center absolute inset-x-0 p-6">
        <nav className="flex flex-col space-y-3 md:flex-row md:justify-between md:w-4/5">
          <div className="text-2xl">mendio</div>
          <ul className="flex space-x-8">
            <li className="cursor-pointer hover:text-main">Product</li>
            <li className="cursor-pointer hover:text-main">Features</li>
            <li className="cursor-pointer hover:text-main">Pricing</li>
            <li className="cursor-pointer hover:text-main">Blog</li>
            <li className="cursor-pointer hover:text-main">Log In</li>
          </ul>
        </nav>
      </header>
      <main className="flex justify-center items-center h-full w-full">
        <div className="flex flex-col items-center space-y-7 mx-4">
          <h1 className="text-center">
            Your adventure travel expert in Iceland
          </h1>
          <p className="max-w-xl text-center">
            With so much to see and do in Iceland, it can be hard to choose an
            activity. Our diverse selection includes hiking, caving, glacier
            walks, mountain climbing, hunting for the Northern Lights and more!
          </p>
          <div className="space-x-5 pt-3">
            <button className="btn btn-primary">Find tours</button>
            <button className="btn btn-secondary">See prices</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
