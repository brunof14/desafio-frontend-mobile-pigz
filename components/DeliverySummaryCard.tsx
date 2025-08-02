import { StyleSheet, Text, View } from "react-native";
import { CardShadow } from "../styles/Shadow";
import { FontFamily } from "../styles/FontFamily";
import { Colors } from "../styles/Colors";

interface DeliverySummaryCardProps {
  accepted: number;
  rejected: number;
  total: number;
}

export default function DeliverySummaryCard({
  accepted,
  rejected,
  total,
}: DeliverySummaryCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Resumo das entregas</Text>
      <View style={styles.cardsContainer}>
        <SummaryCard title="Aceitas" number={accepted} />
        <SummaryCard title="Rejeitadas" number={rejected} />
        <SummaryCard title="Total" number={total} />
      </View>
    </View>
  );
}
type SummaryCardProps = {
  title: string;
  number: number;
};
const SummaryCard = (props: SummaryCardProps) => {
  return (
    <View style={styles.summaryCardContainer}>
      <Text style={styles.summaryTitleText}>{props.title}</Text>
      <Text style={styles.summaryNumberText}>{props.number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CardShadow,
    borderRadius: 16,
    backgroundColor: Colors.white,
    paddingTop: 12,
    paddingBottom: 32,
    paddingHorizontal: 14,
  },
  titleText: {
    fontFamily: FontFamily.Poppins.bold,
    fontSize: 16,
    marginBottom: 16,
    color: Colors.gray800,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 6,
  },
  summaryCardContainer: {
    flex: 1,
    maxWidth: 100,
    alignItems: "center",
    padding: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.gray100,
  },
  summaryTitleText: {
    fontFamily: FontFamily.Poppins.regular,
    fontSize: 11,
    color: Colors.gray500,
  },
  summaryNumberText: {
    fontFamily: FontFamily.Poppins.medium,
    fontSize: 40,
    color: Colors.gray800,
  },
});
