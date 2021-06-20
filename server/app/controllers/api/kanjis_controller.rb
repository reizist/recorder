class Api::KanjisController < ApplicationController
  def meta
    codes = params["codes"].split(',')
    metas = codes.map{|c| JSON.parse(File.read(Rails.root.join('public', 'kanji', 'meta', "#{c}.json")))}

    render json: { meta: metas }
  end
end
