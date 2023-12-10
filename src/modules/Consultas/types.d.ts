import { StackNavigationProp } from "@react-navigation/stack";
import { ScreenStackList } from "@routes/types";

export type ListScreenNavigation = NativeStackNavigationProp<ScreenStackList, "VerCitaScreen">

export type ConsultaRouteProps = {
  route: {
    consultaId?: string
  }
}
