import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DeliverySummaryCard from "../../components/DeliverySummaryCard";
import EarningsOfDayCard from "../../components/EarningsOfDayCard";
import NewDeliveryCard from "../../components/NewDeliveryCard";
import useKeyboard from "../../hooks/useKeyboard";

export default function OverviewTabScreen() {
  const { keyboardIsVisible } = useKeyboard();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          {!keyboardIsVisible && (
            <>
              <EarningsOfDayCard earnings={150} date={new Date()} />
              <DeliverySummaryCard accepted={15} rejected={5} total={20} />
            </>
          )}

          <NewDeliveryCard />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 60,
    paddingHorizontal: 24,
    gap: 32,
  },
});
