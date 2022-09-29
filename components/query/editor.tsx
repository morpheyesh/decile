import InputLabel from "../individual/common/InputLabel";
import _ from "lodash";
import Editor from "@monaco-editor/react";
import Button from "../individual/Button";

interface Props {
  queryDb: () => void;
  setBody: (x: string | undefined) => void;
  body?: string;
  queryLoading?: boolean;
  stopQuery: () => void;
}

const Results: React.FC<Props> = (props) => {
  const { body, setBody, queryDb, stopQuery, queryLoading } = props;

  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex flex-row items-start justify-between w-full">
        <InputLabel title="Query" />
        <div className="grid grid-cols-2 gap-2">
          {queryLoading ? (
            <Button
              label="Stop"
              onClick={() => stopQuery()}
              type="outline-secondary"
            />
          ) : (
            <div />
          )}
          {!queryLoading ? (
            <Button label="Run" onClick={() => queryDb()} type="secondary" />
          ) : (
            <div />
          )}
        </div>
      </div>

      <Editor
        theme="vs-dark"
        defaultLanguage="sql"
        defaultValue={props.body ? body : "select * from users limit 10;"}
        onChange={(evn) => setBody(evn)}
      />
    </div>
  );
};

export default Results;
