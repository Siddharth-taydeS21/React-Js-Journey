import { useRouteError } from "react-router-dom"

export default function Error() {
const error = useRouteError();
console.log(error)
  return (
    <div className="Error">
        <h2>{error.data}</h2>
        <h1>Error : {error.statusText}, Status : {error.status}</h1>
        <small>Requested Page not found or its simply Not Exists</small>
    </div>
  )
}
