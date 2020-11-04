// 버퍼 개체는 고정 길이 바이트 시퀀스를 나타내는 데 사용되는 저장공간
const buffer = Buffer.from('버퍼 시퀀스에 담긴 데이터')  // 문자열을 포함하는 버퍼 객체 생성
console.log('buffer: ', buffer)
console.log('length: ', buffer.length)
console.log('toString(): ', buffer.toString('utf8'))  // Default: 'utf8'

// 버퍼 합치기
const array = [Buffer.from('버퍼 '), Buffer.from('시퀀스 '), Buffer.from('데이터')]
const buffer2 = Buffer.concat(array)
console.log('concat(): ', buffer2.toString())