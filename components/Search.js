import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import axios from "axios";

export default function Search() {
  var [query, setQuery] = useState("");
  var [data, setData] = useState([]);

  const getArticles = async () => {
    try {
      const response = await axios.get(
        `http://newsapi.org/v2/everything?apiKey=1a87250c26f54a2fa6d19d23339d2b76&q=${query}`
      );
      setData(response.data.articles);
    } catch (e) {
      console.e(e);
    }
  };

  return (
    <ScrollView>
      <View>
        <TextInput
          value={query}
          style={{
            fontSize: 30,
            color: "#A1CB6E",
            borderWidth: 2,
            borderColor: "#A1CB6E",
            backgroundColor: "#EFF0DB",
            width: "100%",
            padding: "4% 2%",
          }}
          placeholder="Search"
          onChangeText={(query) => {
            setQuery(query);
          }}
        />
        <Button onPress={getArticles} title="Search" color="green">
          Search
        </Button>
        {data &&
          data.map((art) => {
            return (
              <Text
                style={{
                  textAlign: "center",
                  marginVertical: 5,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {art.title}
              </Text>
            );
          })}
      </View>
    </ScrollView>
  );
}
