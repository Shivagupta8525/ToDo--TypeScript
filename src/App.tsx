import { useEffect, useState } from "react";
import CompleteTAsk from "./CompleteTask";
import ReamaningTask from "./ReamaningTask";
import InputComponent from "./InputComponent";
import Header from "./Header";
import Footer from "./Footer";
function App() {
  const [takeInput, setTakeInput] = useState<boolean>(false);
  const Data = localStorage.getItem("toDoItems") || "[]";
  const storedData = JSON.parse(Data);
  const [toDo, setToDo] = useState<string[]>(storedData);
  const [Done, setDone] = useState<string[]>([]);
  function setComponent() {
    setTakeInput(true);
  }
  const updateVal = (newVal: string) => {
    console.log(newVal.length);
    if (newVal.length > 0) {
      const newToDo = [...toDo, newVal];
      setToDo(newToDo);

      setTakeInput(false);
    }
  };
  useEffect(() => {
    const setToDoItem = JSON.stringify(toDo);
    localStorage.setItem("toDoItems", setToDoItem);
  }, [toDo]);

  const onDone = (index: number) => {
    const newDo = [...toDo];
    const completed = newDo.splice(index, 1)[0];
    setToDo(newDo);
    setTimeout(() => {
      setDone([...Done, completed]);
    }, 100);
  };
  const handleAgainDo = (index: number) => {
    const againDo = Done.splice(index, 1)[0];
    setTimeout(() => {
      setToDo([...toDo, againDo]);
    }, 100);
  };
  const handleRemoveItems = (index: number) => {
    const newDone = [...Done];

    newDone.splice(index, 1);

    setDone(newDone);
  };

  return (
    <div className=" flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto ">
          <hr />
          <div className="flex flex-col justify-start items-start grow">
            <h1 className="text-3xl p-4 font-bold">Things to get Done</h1>

            <ReamaningTask toDoVal={toDo} onDone={onDone} />
            {takeInput ? (
              <InputComponent
                setTakeInput={setTakeInput}
                updateVal={updateVal}
              />
            ) : (
              <button
                onClick={setComponent}
                className="border border-black rounded-2xl py-1 px-3 mt-4 ml-2 bg-blue-300 hover:bg-blue-500"
              >
                {" "}
                Add a todo
              </button>
            )}

            <CompleteTAsk
              thingsDone={Done}
              AgainDo={handleAgainDo}
              removeItem={handleRemoveItems}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
