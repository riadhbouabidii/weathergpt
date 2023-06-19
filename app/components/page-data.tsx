import { Illustration } from "./illustration";
import { Footer } from "./footer";

export function PageData({ data }: { data: any }) {
  const date = new Date().toISOString();
  return (
    <>
      <main>
        
        <h1>You did it Riadh!</h1>
        <p className="description">
          Get the weather of any given location
        </p>
        <Illustration />
        <div className="meta">
          <div className="info">
            <span>Your Location</span>
            <span className="region">
              <strong>{data.location.name}</strong>
            </span>
          </div>
          <div className="info">
            <span>Current Temperature</span>
            <strong>
              {data.current.temp_c}°C / {data.current.temp_f}°F
            </strong>
          </div>
        </div>
      </main>

      
    </>
  );
}
