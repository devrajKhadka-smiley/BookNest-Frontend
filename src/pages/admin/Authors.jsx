import Table from "../../components/Table";

const Authors = () => {
    const headers =["Name"];

    const authors = ["JK Rowling", "George R.R. Martin", "J.R.R. Tolkien", "Agatha Christie", "Stephen King"];
    const data = authors.map((author) => ({ Name: author }));

    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-lg">Welcome to Authors page!</p>
        <Table headers={headers} data={data} width="auto" />
      </div>
    );
  };
  
  export default Authors;