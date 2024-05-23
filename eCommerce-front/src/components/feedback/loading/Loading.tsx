import { TLoading } from "@customTypes/shared";

type LoadingProps = {
  status : TLoading,
  children: React.ReactNode,
  error: null | string
}

const Loading = ({status, error, children} : LoadingProps) => {
  if(status === "pending"){
    return <div>loading.... please wait </div>
  }else if(status === "rejected"){
    return <div>{error}</div>
  }

  return <>{children}</>
}

export default Loading;