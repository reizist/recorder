class Api::KanjisController < ApplicationController
  def meta
    render json: {hoge: "hoge"}
  end
end
