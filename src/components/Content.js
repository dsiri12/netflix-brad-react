const Content = () => {
  return (
    <div class="container">
      <div id="tab-1-content" class="tab-content-item show">
        <div className="tab-1-content-inner">
          <div>
            <p class="text-lg">
              If you decide Netflix isn't for you - no problem. No commitment.
              Cancel online anytime.
            </p>
            <a href="#" class="btn btn-lg">
              Watch Free For 30 Days
            </a>
          </div>
          <img src="images/tab-content-1.png" alt="" />
        </div>
      </div>

      <div id="tab-2-content" class="tab-content-item">
        <div class="tab-2-content-top">
          <p className="text-lg">
            Watch TV shows and movies anytime, anywhere - personalized for you.
          </p>
          <a href="#" className="btn btn-lg">
            Watch Free For 30 Days
          </a>
        </div>
        <div className="tab-2-content-bottom">
          <div>
            <img src="images/tab-content-2-1.png" alt="" />
            <p class="text-md">Watch on your TV</p>
            <p class="text-dark">
              Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>

          <div>
            <img src="images/tab-content-2-2.png" alt="" />
            <p class="text-md">Watch instantly or download for later</p>
            <p class="text-dark">
              Available on phone and tablet, wherever you go.
            </p>
          </div>

          <div>
            <img src="images/tab-content-2-3.png" alt="" />
            <p class="text-md">Use any computer</p>
            <p class="text-dark">Watch right on Netflix.com</p>
          </div>
        </div>
      </div>

      <div id="tab-3-content" class="tab-content-item">
        <div class="text-center">
          <p class="text-lg">Choose one plan and watch everything on Netflix</p>
          <a href="#" class="btn btn-lg">
            Watch Free For 30 Days
          </a>
        </div>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Basic</th>
            <th>Standard</th>
            <th>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monthly price after free month ends on 6/19/19</td>
            <td>$8.99</td>
            <td>$12.99</td>
            <td>$15.99</td>
          </tr>
          <tr>
            <td>HD Available</td>
            <td>
              <i class="fas fa-times"></i>
            </td>
            <td>
              <i class="fas fa-check"></i>
            </td>
            <td>
              <i class="fas fa-check"></i>
            </td>
          </tr>
          <tr>
            <td>Ultra HD Available</td>
            <td>
              <i class="fas fa-times"></i>
            </td>
            <td>
              <i class="fas fa-times"></i>
            </td>
            <td>
              <i class="fas fa-check"></i>
            </td>
          </tr>
          <tr>
            <td>Screens you can watch on at the same time</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Watch on your laptop, TV, phone and tablet</td>
            <td>
              <i class="fas fa-check"></i>
            </td>
            <td>
              <i class="fas fa-check"></i>
            </td>
            <td>
              <i class="fas fa-check"></i>
            </td>
          </tr>
          <tr>
            <td>Unlimited movies and TV shows</td>
            <td>
              <i class="fas fa-check"></i>
            </td>
            <td>
              <i class="fas fa-check"></i>
            </td>
            <td>
              <i class="fas fa-check"></i>
            </td>
            <tr>
              <td>Cancel anytime</td>
              <td>
                <i class="fas fa-check"></i>
              </td>
              <td>
                <i class="fas fa-check"></i>
              </td>
              <td>
                <i class="fas fa-check"></i>
              </td>
            </tr>
            <tr>
              <td>First month free</td>
              <td>
                <i class="fas fa-check"></i>
              </td>
              <td>
                <i class="fas fa-check"></i>
              </td>
              <td>
                <i class="fas fa-check"></i>
              </td>
            </tr>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Content
