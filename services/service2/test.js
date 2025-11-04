// Intentionally failing test to demonstrate CI failing run on main
if (1 + 1 === 3) {
  console.log('test ok')
  process.exit(0)
} else {
  console.error('test failed')
  process.exit(1)
}
