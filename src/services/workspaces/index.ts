import axios from "axios"
import { Workspace } from "../../types/type"
import { WorkspaceParams } from "../../types/dto"

export const fetchWorkspaces = async (): Promise<[Workspace[] | null, boolean]> => {
  try {
    const res = await axios.get(import.meta.env.VITE_API_URL + '/api/workspaces')

    if (res.status != 200) {
      return [null, false]
    }

    return [res.data.data, true]
  } catch (err) {
    console.error(err)
    return [null, false]
  }
}

export const fetchWorkspaceByID = async (params?: WorkspaceParams): Promise<[Workspace | null, boolean]> => {
  try {
    const res = await axios.get(import.meta.env.VITE_API_URL + `/api/workspaces/${params!.id}`)

    if (res.status != 200) {
      return [null, false]
    }

    return [res.data.data, true]
  } catch (err) {
    console.error(err)
    return [null, false]
  }
}