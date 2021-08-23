import { useHistory, useRouteMatch } from "react-router-dom"

export type LinkState = {
  from: string
} 

function getParent(path: string) {
  const breadcrumb = path.split("/")
  breadcrumb.pop()
  return breadcrumb.join("/")
}

export function useEnvironment() {
  const history = useHistory<LinkState>()
  const { path } = useRouteMatch();

  const goAhead = function(part: string) {
    console.log(`Going to the new url ${path}/${part}`)
    history.push({pathname: `${path}/${part}`, state: { from: path }})
  }

  const goInstead = function(part: string) {
    const parent = getParent(path)
    console.log(`Going to the new url ${parent}/${part}`)
    history.push({pathname: `${parent}/${part}`})
  }

  const goBack = function(): boolean {
    const parent = getParent(path)
    if (history.location.state?.from == parent) {
      console.log(`Going back to the stored url ${parent}`)
      history.goBack()
      return true
    }
    else {
      console.log(`Going to the new url ${parent}`)
      history.push(parent)
      return false
    }
  }
  
  return { goAhead, goInstead, goBack }
} 
