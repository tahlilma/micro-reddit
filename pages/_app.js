import { useState } from "react";
import { Modal, Input, message } from "antd";
import { useRouter } from "next/router";
import TopBar from "../components/TopBar";

import "../styles/globals.css";
import "antd/dist/antd.dark.css";

function MyApp({ Component, pageProps }) {
  const [modal, setModalVisible] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (query.length === 0) {
      message.error("No Query ?");
      return;
    }

    router.push(`/r/${query}`);
    setModalVisible(false);
    setQuery("");
  };

  return (
    <>
      <TopBar
        type={modal ? "primary" : "secondary"}
        onClick={() => setModalVisible(true)}
      />
      <Modal
        title="View Subreddit"
        visible={modal}
        onCancel={() => setModalVisible(false)}
        onOk={handleSubmit}
      >
        <Input
          addonBefore="r/"
          placeholder="Subreddit"
          value={query}
          onChange={(e) => {
            e.preventDefault();
            setQuery(e.target.value);
          }}
        />
      </Modal>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
