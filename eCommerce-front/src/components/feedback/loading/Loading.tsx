import { TLoading } from "@types";
import CategoriesSkeleton from "../skeletons/CategoriesSkeleton";

type LoadingProps = {
  status : TLoading,
  children: React.ReactNode,
  error: null | string
}

const Loading = ({status, error, children} : LoadingProps) => {
  if(status === "pending"){
    return <CategoriesSkeleton/>
  }else if(status === "rejected"){
    return <div>{error}</div>
  }

  return <>{children}</>
}

export default Loading;