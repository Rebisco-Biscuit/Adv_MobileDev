import GestureRecognizer from "react-native-swipe-gestures";

// force TS to accept it as "any"
const GestureRecognizerAny: any = GestureRecognizer;

export default function SwipeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <GestureRecognizerAny
      style={{ flex: 1 }}
      config={{
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80,
      }}
    >
      {children}
    </GestureRecognizerAny>
  );
}
