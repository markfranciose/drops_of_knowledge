def call_out_cheer():
	return input('What is the cheer? \n')

def display(sign):
	print(sign)

def mascot_sign_for(cheer):
	signer = {
		'RED HOT'					: 'H-O-T',
		'DO IT AGAIN'			: 'Go, Fight, Win',
		'2 BITS'					: 'Holler!',
		'STOMP YOUR FEET'	: 'STOMP!'
	}
	return signer.get(cheer, "GO TEAM")

	# both of these work

	# if cheer == 'RED HOT':
	# 	return 'H-O-T'
	# elif cheer == 'DO IT AGAIN':
	# 	return 'Go, Fight, Win'
	# elif cheer == '2 BITS':
	# 	return 'Holler!'
	# elif cheer == 'STOMP YOUR FEET':
	# 	return 'STOMP!'
	# else:
	# 	return 'GO TEAM'

def coordinate_cheers():
	cheer = call_out_cheer()
	blanks = 0
	while cheer != 'GAME OVER':
		display(mascot_sign_for(cheer))
		cheer = call_out_cheer()
	else:
		quit()