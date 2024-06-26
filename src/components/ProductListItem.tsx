import { Text, View } from "@/src/components/Themed"
import { StyleSheet, Image } from "react-native"
import Colors from "@/src/constants/Colors"
import { Product } from "@/types"

type ProductListItemProps = {
  product: Product
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            product.image ||
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png",
        }}
        style={styles.image}
      />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}

export default ProductListItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    color: "black",
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
})
