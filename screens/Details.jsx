import { View, Image, ScrollView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { COLOR, GLOBAL } from "../global_styles";
import { Button, Divider, Paragraph, Title, List } from "react-native-paper";

const Details = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[GLOBAL.screenContainer, GLOBAL.removePadding]}
    >
      <Image
        style={style.banner}
        resizeMode="cover"
        source={{ uri: "https://picsum.photos/700" }}
      />
      <View style={style.header}>
        <Title style={style.title}>Casita para pet</Title>
        <Paragraph style={style.rating}>5.0</Paragraph>
      </View>
      <View style={style.content}>
        <View style={style.row_container_text}>
          <Title>1 Espacio | 1 Noche</Title>
          <Title style={style.bolder}>$.25.000</Title>
        </View>
        <Divider bold />

        <List.Section style={style.listSection}>
          <List.Subheader>
            <Title style={style.bolder}>Ubicación</Title>
          </List.Subheader>
          <List.Item
            title="El poblado, Medellin"
            left={() => <List.Icon icon="crosshairs-gps" />}
          />
        </List.Section>
        <Divider bold />

        <List.Section style={style.listSection}>
          <List.Subheader>
            <Title style={style.bolder}>Servicios</Title>
          </List.Subheader>
          <List.Item
            title="Camara con Wifi"
            left={() => <List.Icon icon="wifi" />}
          />
          <List.Item
            title="Comiditas a tiempo"
            left={() => <List.Icon icon="food-turkey" />}
          />
          <List.Item
            title="Paseos Diarios"
            left={() => <List.Icon icon="dog-service" />}
          />
          <List.Item
            title="Traslados"
            left={() => <List.Icon icon="van-utility" />}
          />
        </List.Section>

        <Divider bold />
        <View style={[style.row_container_text, { flexDirection: "column" }]}>
          <Title style={style.bolder}>Descripción</Title>
          <Paragraph>
            Un espacio agradable para tu mascota con calor de hogar. Contamos
            con dos personas listas para atender a tu mascota.
          </Paragraph>
        </View>
        <Divider bold />
        <View style={style.buttonContainer}>
          <Button
            style={{ marginVertical: 15, borderRadius: 5 }}
            mode="elevated"
            buttonColor={COLOR.blue}
            textColor={COLOR.appBackground}
          >
            Reserva este espacio
          </Button>
        </View>
      </View>
      <View />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  banner: {
    position: "absolute",
    top: 0,
    alignSelf: "center",
    width: "100%",
    height: 230,
  },
  title: {
    color: COLOR.appBackground,
    fontWeight: "bold",
  },
  rating: {
    color: COLOR.appBackground,
  },
  header: {
    marginTop: 150,
    paddingHorizontal: 25,
  },
  row_container_text: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
  },
  listSection: {
    paddingHorizontal: 15,
  },
  buttonContainer: {
    flex: 1,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bolder: {
    fontWeight: 800,
  },
  content: {
    backgroundColor: COLOR.appBackground,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
    flexGrow: 1,
  },
});

export default Details;
