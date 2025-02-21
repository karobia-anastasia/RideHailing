import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export interface Ride {
  id: number
  driverName: string
  estimatedFare: number
  distance: number
  date: string
}

const fetchRides = async (): Promise<Ride[]> => {
  const { data } = await axios.get<Ride[]>("https://run.mocky.io/v3/0091f9cd-a404-4758-b229-ba67dcff3014")
  return data
}

export const useRides = () => {
  return useQuery<Ride[], Error>({
    queryKey: ["rides"],
    queryFn: fetchRides,
    staleTime: 5 * 60 * 1000, 
    refetchOnWindowFocus: false,
  })
}

