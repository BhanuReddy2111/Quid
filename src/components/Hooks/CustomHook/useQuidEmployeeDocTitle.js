import { useEffect } from "react";

function useQuidEmployeeDocTitle(count) {
  return (
    useEffect(() => {
      document.title = `${count} Quid Employees`;
    }, [count])
  )
}

export default useQuidEmployeeDocTitle