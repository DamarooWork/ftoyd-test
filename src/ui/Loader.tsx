import { Oval } from 'react-loader-spinner'
export default function Loader() {
  return (
    <Oval
      visible={true}
      height="80"
      width="80"
      color="#fff"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass="flex justify-center items-center mt-10"
    />
  )
}
