import useTypewritter from '../hooks/useTypewriter';

function Message({ text }) {
  const message = useTypewritter(text);

  return <p>{message}</p>;
}

export default Message;
