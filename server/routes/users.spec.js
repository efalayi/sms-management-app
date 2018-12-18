describe('GET /users', () => {
  it('should return a message', async () => {
    const response = await request.get('/api/v1/users/')
    const responseText = JSON.parse(response.text)
    expect(responseText).toHaveProperty('message', 'No users at the moment. Please try again in the next 24 hours')
  })
})
