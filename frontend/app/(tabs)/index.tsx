import { View, Text, Image, Pressable, StyleSheet } from 'react-native'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SLOTIFY</Text>
      <Image 
        source={require('')}
        style={styles.mainImage}
      />
      <View style={styles.row}>
        <Image
          source={require('')}
          style={styles.smallImage}
        />
        <Image
          source={require('')}
          style={styles.smallImage}
        />
      </View>
      <Text style={styles.heading}>"Your time, your schedule"</Text>
      <Text style={styles.subheading}>"Schedule smarter, live better"</Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>LOGIN/SIGN UP</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.textlink}>
          Login/sign up as service provider instead
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'f2ebff',
    padding: 20,
    alignItems: 'center'
  },
  logo: {
    fontSize: 36
  }
})