export default function Card({ asset }) {
  return (
    <div className="card">
      <h2>
        {asset.name} ({asset.symbol})
      </h2>
      <p>Price: ${asset.price}</p>
      <p className={asset.change >= 0 ? "price-up" : "price-down"}>
        {asset.change}%
      </p>
      <button className="buy-btn">Buy</button>
    </div>
  );
}