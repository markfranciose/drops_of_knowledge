# in sessions controller

get '/sessions/new' do
  erb :"session/new"
end

post '/sessions' do
  @user = User.find_by(username: params[:username])

  if @user && @user.authenticate(params[:password])
    session[:user_id] = @user.id
    redirect '/'
  else
    @message = "Either you username or password was wrong"
    erb :"session/new"
  end

end

delete '/sessions' do
  session.delete(:user_id)
  redirect '/'
end

get '/not_authorized' do
  erb :not_authorized
end

#####################################

# in helpers

def current_user
  @current_user ||= User.find_by(id: session[:user_id])
end

def logged_in?
  session[:user_id] != nil
end

# below works because if a user is logged in, that means they have a user_id in their session, 
# and if they have a user_id in their sessions, they must have passed through the User.authenticate method.

def authenticate!
  redirect '/sessions/new' unless logged_in?
end


############################################
# in a controller file:

get '/games' do
  @games = Game.all
  erb :"games/index"
end

get '/games/new' do
  authenticate! # before anything that you're only supposed to see as a logged_in user, run the authenticate! method

  @game = Game.new
  erb :"games/new"
end

post '/games' do
  authenticate!
  @game = Game.new(params[:game])

  if @game.save
    current_user.games << @game
    redirect '/games'
  else
    erb :"games/new"
  end
end

get '/games/:id' do
  @game = Game.find_by(id: params[:id])
  erb :"games/show"
end

get '/games/:id/edit' do
  authenticate!

  @game = Game.find_by(id: params[:id])
  redirect '/not_authorized' if current_user != @game.user # before you're going to do anything, make sure user is allowed to 

  erb :"games/edit"
end

put '/games/:id' do
  authenticate!

  @game = Game.find_by(id: params[:id])
  redirect '/not_authorized' if current_user != @game.user

  if @game.update_attributes(params[:game])
    redirect '/games'
  else
    erb :"games/edit"
  end
end

delete '/games/:id' do
  authenticate!

  @game = Game.find_by(id: params[:id])
  redirect '/not_authorized' if current_user != @game.user

  @game.destroy
  redirect '/games'
end

