require "test_helper"

class Api::KanjisControllerTest < ActionDispatch::IntegrationTest
  test "should get meta" do
    get api_kanjis_meta_url
    assert_response :success
  end
end
