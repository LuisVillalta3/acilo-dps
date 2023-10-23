import { StackNavigationProp } from "@react-navigation/stack";
import { ScreenStackList } from "@routes/types";

export type ListScreenNavigation = StackNavigationProp<ScreenStackList, "DoctoresScreen">

export type FormScreenNavigation = StackNavigationProp<ScreenStackList, "DoctorFormScreen">
export type DoctorHorarioFormScreenNavigation = StackNavigationProp<ScreenStackList, "DoctorHorarioFormScreen">

export type DoctorScreenNavigation = StackNavigationProp<ScreenStackList, "DoctorScreen">

export type DoctorRouteProps = {
  route: {
    doctorId?: string
  }
}
