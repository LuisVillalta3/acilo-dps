import { StackNavigationProp } from "@react-navigation/stack";
import { ScreenStackList } from "@routes/types"

export type PacienteCardProps = {
  navigation: StackNavigationProp<ScreenStackList, "PacientesScreen">
}