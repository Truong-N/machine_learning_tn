const pandas_read_csv = (input) => {
  const filename = input.files[0];
  const fileReader = new FileReader();
  fileReader.readAsText(filename);
  fileReader.onload = () => {
    const f_content = fileReader.result;
    //define row
    let dataset = f_content.split('\n').map((row) => row.trim());
    // define column
    dataset = dataset.map((item) => item.split(','));
    console.log('pandas_read_csv():');
    console.log('dataset:');
    console.log(dataset);
    // remove header
    dataset.shift();
    pandas_iloc(dataset);
  };
  fileReader.onerror = () => {
    alert(fileReader.error);
  };
};
