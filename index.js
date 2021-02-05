function convert() {
  const binary = document.getElementById('bin').value;
  if (binary === '') return alert('Insira um binário para conversão');
  binary.split('').map((char) => {
    if (char !== '0' && char !== '1')
      return alert('Insira um binário para conversão');
  });
  const decimal = parseInt(binary, 2);
  document.getElementById('dec').value = decimal;
  return true;
}
