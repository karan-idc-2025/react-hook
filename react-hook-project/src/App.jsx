import "./App.css";
import { useFetch } from "./customHook/useFetch";

function App() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  console.log("data", data, "error", error, "loading", loading);
  return (
    <>
      {loading && <div>Loading...</div>}
      {error != null && <div>{error}</div>}

      {data?.length > 0 && <div>
        <h1>Photos</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {data?.length > 0 &&
            data?.map((product) => (
              <div
                key={product.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border:'1px solid white',
                  padding:'10px'
                }}
              >
                <div className="img" style={{ width: "200px" }}>
                  <img
                    style={{ width: "100%" }}
                    src={product?.images[0] || product?.category?.image}
                    alt="product image"
                  />
                </div>
                <div>{product?.title}</div>
              </div>
            ))}
        </div>
      </div>}
    </>
  );
}

export default App;
