import { StackNavigationProp } from "@react-navigation/stack";
import { ScreenStackList } from "@routes/types";

export type ListScreenNavigation = StackNavigationProp<ScreenStackList, "PacientesScreen">

export type FormScreenNavigation = StackNavigationProp<ScreenStackList, "PacienteFormScreen">

export type FormScreenProps = {
  route: {
    params: {
      pacienteID?: string
    }
  }
}
