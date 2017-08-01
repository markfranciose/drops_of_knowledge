def current_user
  @current_user ||= User.find_by(id: session[:user_id])
  # @current_user ||= User.find(isession[:user_id]) if logged_in?
end

def logged_in?
  session[:user_id] != nil
end

def authenticate!
  redirect '/sessions/new' unless logged_in?
end