import Aside from "./Aside"

import { Main } from "./Main"

export const Content = () => {
  return (
    <div className="flex container">
      <Aside />
      <Main />
    </div>
  )
}

