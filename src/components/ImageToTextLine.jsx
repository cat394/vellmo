import ImageToText from "./ImageToText";

export default function ImageToTextLine(props) {
  const { gap='', evenReverse=false, circle=false, commonPath='', details=[] } = props;

  return (
    <div style={{
          display: "flex",
          flexDirection: "column",
          gap: gap
    }}>
      {
        details.map(detail => {
          if (evenReverse && detail.id % 2 === 0) {
            return (
              <ImageToText evenReverse circle={circle} commonPath={commonPath} detail={detail} key={detail.id} />
            )
          }
          return <ImageToText circle={circle} commonPath={commonPath} detail={detail} key={detail.id} />
        })
      }
    </div>
  );
} 
